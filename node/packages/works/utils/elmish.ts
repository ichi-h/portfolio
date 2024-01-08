export type BaseMessage = { type: string };

export type Send<Msg extends BaseMessage> = (message: Msg) => void;

export type Update<Model, Msg extends BaseMessage> = (
  model: Model,
  message: Msg,
) => { newModel: Model; cmd?: () => Promise<Msg> };

export type UpdateView<Model> = (model: Model) => void;

export type UseUpdate<Model, Msg extends BaseMessage> = (
  model: Model,
  updateView: (state: Model) => void,
) => Send<Msg>;

export const createUpdate = <Model, Msg extends BaseMessage>(
  update: Update<Model, Msg>,
): UseUpdate<Model, Msg> => {
  let storedModel: Model | null = null;

  const useUpdate =
    (init: Model, updateView: UpdateView<Model>) => (message: Msg) => {
      if (!storedModel) storedModel = init;
      const model = storedModel;

      const { newModel, cmd } = update(model, message);
      storedModel = newModel;

      updateView(newModel);

      if (cmd) {
        cmd().then((msg) => {
          const send = useUpdate(newModel, updateView);
          send(msg);
        });
      }
    };

  return useUpdate;
};
