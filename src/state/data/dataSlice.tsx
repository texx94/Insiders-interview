import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface record {
  athletes: object
}

interface dataState {
  isInitilized: boolean;
  messages: record[];
  history: athleteHistory[];
  athletes: string[];
  selectedAthlete: string;
}

interface athleteHistory {
  athlete: string,
  bestRank: number,
  worstRank: number,
  maxSpeed: number,
  minSpeed: number,
  speedHistory: { speed: number, timestamp: number }[],
}

interface athlete {
  athlete: string,
}

const initialState: dataState = {
  isInitilized: false,
  messages: [],
  history: [],
  athletes: [],
  selectedAthlete: '',
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initData: (state, action: PayloadAction<record>) => {
      state.isInitilized = true;
      const athletes = Object.getOwnPropertyNames(action.payload?.athletes)
      state.athletes = athletes;
      state.selectedAthlete = athletes[0];
    },
    addMessage: (state, action: PayloadAction<record>) => {
      state.messages = [...state.messages, action.payload]
    },
    updateHistory: (state, action: PayloadAction<record>) => {
      const athletesData = action.payload?.athletes;
      for (const athlete in athletesData) {
        const athleteHistoryIndex = state.history.findIndex((athleteHistory) => athleteHistory.athlete === athlete);
        if (athleteHistoryIndex === -1) {
          // add record in history
          state.history.push({
            athlete: athlete,
            bestRank: athletesData[athlete as keyof object]['rank'],
            worstRank: athletesData[athlete as keyof object]['rank'],
            maxSpeed: athletesData[athlete as keyof object]['speed'],
            minSpeed: athletesData[athlete as keyof object]['speed'],
            speedHistory: [{
              speed: athletesData[athlete as keyof object]['speed'],
              timestamp: athletesData[athlete as keyof object]['timestamp'],
            }],
          })
        } else {
          // update record in history
          const currentRank = athletesData[athlete as keyof object]['rank'];
          const bestRank = Math.min(state.history[athleteHistoryIndex].bestRank, currentRank);
          const worstRank = Math.max(state.history[athleteHistoryIndex].worstRank, currentRank);
          const maxSpeed = Math.max(state.history[athleteHistoryIndex].maxSpeed, athletesData[athlete as keyof object]['speed']);
          const minSpeed = Math.min(state.history[athleteHistoryIndex].minSpeed, athletesData[athlete as keyof object]['speed']);
          const speedHistory = [
            ...state.history[athleteHistoryIndex].speedHistory, 
            {
              speed: athletesData[athlete as keyof object]['speed'],
              timestamp: athletesData[athlete as keyof object]['timestamp'],
            }
          ]
          
          state.history[athleteHistoryIndex] = {
            athlete: athlete,
            bestRank: bestRank,
            worstRank: worstRank,
            maxSpeed: maxSpeed,
            minSpeed: minSpeed,
            speedHistory: speedHistory,
          }
        }
      }
    },
    setSelectedAthlete: (state, action: PayloadAction<athlete>) => {
      state.selectedAthlete = action.payload.athlete;
    },
  },
});

export const { addMessage, initData, updateHistory, setSelectedAthlete } = dataSlice.actions;

export default dataSlice.reducer;