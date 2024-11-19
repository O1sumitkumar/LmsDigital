import {ActionReducerMapBuilder, CaseReducer, Action} from '@reduxjs/toolkit';

interface TypedActionCreator<Type extends string = string> {
  (...args: any[]): Action<Type>;
  type: Type;
}

interface ThunkActionCreator<
  TPending extends string = string,
  TFulfilled extends string = string,
  TRejected extends string = string,
> {
  pending: TypedActionCreator<TPending>;
  fulfilled: TypedActionCreator<TFulfilled>;
  rejected: TypedActionCreator<TRejected>;
}

interface TAsyncReducer<
  TState,
  TAction extends ThunkActionCreator<string, string, string>,
> {
  fulfilled?: CaseReducer<TState, ReturnType<TAction['fulfilled']>>;
  pending?: CaseReducer<TState, ReturnType<TAction['pending']>>;
  rejected?: CaseReducer<TState, ReturnType<TAction['rejected']>>;
}

function isThunkActionCreator(
  action:
    | TypedActionCreator
    | ThunkActionCreator<string, string, string>
    | undefined,
): action is ThunkActionCreator<string, string, string> {
  return (
    !!action &&
    typeof action === 'object' &&
    'pending' in action &&
    'fulfilled' in action &&
    'rejected' in action
  );
}

export function createReducerBuilder<TState>() {
  return <
      TAction extends
        | TypedActionCreator<string>
        | ThunkActionCreator<string, string, string>,
    >(
      action: TAction,
      reducer: TAction extends ThunkActionCreator<string, string, string>
        ? TAsyncReducer<TState, TAction>
        : TAction extends TypedActionCreator<string>
        ? CaseReducer<TState, ReturnType<TAction>>
        : never,
    ) =>
    (builder: ActionReducerMapBuilder<TState>) => {
      if (!action) {
        throw new Error('Action creator is required');
      }

      if (isThunkActionCreator(action)) {
        const asyncAction = action as ThunkActionCreator<
          string,
          string,
          string
        >;
        const asyncReducer = reducer as TAsyncReducer<
          TState,
          typeof asyncAction
        >;

        if (asyncReducer.fulfilled) {
          builder.addCase(asyncAction.fulfilled, asyncReducer.fulfilled);
        }
        if (asyncReducer.pending) {
          builder.addCase(asyncAction.pending, asyncReducer.pending);
        }
        if (asyncReducer.rejected) {
          builder.addCase(asyncAction.rejected, asyncReducer.rejected);
        }
      } else {
        const syncAction = action as TypedActionCreator<string>;
        const syncReducer = reducer as CaseReducer<
          TState,
          ReturnType<typeof syncAction>
        >;
        builder.addCase(syncAction, syncReducer);
      }

      return builder;
    };
}
