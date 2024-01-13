export type BaseMessage = { type: string };

export type Send<Msg extends BaseMessage> = (message: Msg) => void;

export type Update<Model, Msg extends BaseMessage> = (
  model: Model,
  message: Msg,
) => { newModel: Model; cmd?: () => Promise<Msg> };

export type UpdateView<Model> = (model: Model) => void;

export type Init<Model, Msg extends BaseMessage> =
  | Model
  | (() => { model: Model; cmd?: () => Promise<Msg> });

export type UseUpdate<Model, Msg extends BaseMessage> = (
  init: Init<Model, Msg>,
  updateView: (state: Model) => void,
) => Send<Msg>;

type Store<Model> = {
  initialized: boolean;
  model: Model | null;
};

const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const isModel = <Model, Msg extends BaseMessage>(
  init: Init<Model, Msg>,
): init is Model => typeof init !== "function";

export const createUpdate = <Model, Msg extends BaseMessage>(
  update: Update<Model, Msg>,
): UseUpdate<Model, Msg> => {
  const store: Store<Model> = {
    initialized: false,
    model: null,
  };

  const useUpdate = (init: Init<Model, Msg>, updateView: UpdateView<Model>) => {
    const send = (message: Msg) => {
      const { newModel, cmd } = update(
        deepClone(store.model as Model),
        message,
      );
      store.model = newModel;
      updateView(newModel);
      if (cmd) cmd().then(send);
    };

    if (!store.initialized) {
      const { model: initModel, cmd: initCmd } = isModel(init)
        ? { model: init, cmd: undefined }
        : init();

      store.initialized = true;
      store.model = initModel;
      if (initCmd) initCmd().then(send);
    }

    return send;
  };

  return useUpdate;
};
