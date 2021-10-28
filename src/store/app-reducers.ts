export const appReducer = (
  state: AppInitialStateType = initialState,
  action: ActionAppType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/CHANGE_STATUS':
      return { ...state, status: action.status };

    default:
      return state;
  }
};

const initialState: AppInitialStateType = {
  status: 'done',
};

export const appChangeStatus = (status: StatusType) => {
  return { type: 'APP/CHANGE_STATUS', status } as const;
};

export type AppInitialStateType = { status: StatusType };
export type ActionAppType = ReturnType<typeof appChangeStatus>;
export type StatusType = `loading` | 'done';
