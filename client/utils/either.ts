interface Which {
  readonly which: "left" | "right";
}

export interface Right<T> extends Which {
  readonly value: T;
  readonly which: "right";
}

export interface Left<T> extends Which {
  readonly value: T;
  readonly which: "left";
}

const value = <L, R>(either: Either<L, R>) => either["value"];

const which = <L, R>(either: Either<L, R>) => either["which"];

export type Either<L, R> = Left<L> | Right<R>;

export const left = <L, R>(left: L): Either<L, R> => {
  return { value: left, which: "left" };
};

export const right = <L, R>(right: R): Either<L, R> => {
  return { value: right, which: "right" };
};

// either :: (a -> c) -> (b -> c) -> Either a b -> c
export const either =
  <L, R, T>(onLeft: (left: L) => T) =>
  (onRight: (right: R) => T) =>
  (either: Either<L, R>): T => {
    switch (which(either)) {
      case "left":
        return onLeft(value(either) as L);
      case "right":
        return onRight(value(either) as R);
    }
  };

// fromLeft:: a -> Either a b -> a
export const fromLeft =
  <L, R>(left: L) =>
  (either: Either<L, R>): L => {
    if (which(either) === "left") return value(either) as L;
    return left;
  };

// fromRight:: b -> Either a b -> b
export const fromRight =
  <L, R>(right: R) =>
  (either: Either<L, R>): R => {
    if (which(either) === "right") return value(either) as R;
    return right;
  };

// isLeft:: Either a b -> Bool
export const isLeft = <L, R>(either: Either<L, R>): boolean => {
  return which(either) === "left";
};

// isRight:: Either a b -> Bool
export const isRight = <L, R>(either: Either<L, R>): boolean => {
  return which(either) === "right";
};
