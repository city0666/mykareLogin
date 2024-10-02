import {atom, selector} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY2 = 'loginToken';
// const STORAGE_KEY_B ='buildingList';
const STORAGE_KEY_B = 'your_storage_key';

export const logintoken = atom({
  key: 'loginToken',
  default: async () => {
    try {
      const storedValue = await AsyncStorage.getItem(STORAGE_KEY2);
      return storedValue != null ? JSON.parse(storedValue) : false;
    } catch (error) {
      console.log('Error retrieving atom value:', error);
      return '';
    }
  },
  effects_UNSTABLE: [
    ({setSelf, onSet}) => {
      onSet(async newValue => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY2, JSON.stringify(newValue));
        } catch (error) {
          console.log('Error storing atom value:', error);
        }
      });
      const initializeValue = async () => {
        try {
          const storedValue = await AsyncStorage.getItem(STORAGE_KEY2);
          const parsedValue =
            storedValue !== null ? JSON.parse(storedValue) : false;
          setSelf(parsedValue);
        } catch (error) {
          console.log('Error retrieving atom value:', error);
        }
      };
      initializeValue();
    },
  ],
});

//building list

export const buildinglist = atom({
  key: 'building',
  default: async () => {
    try {
      const storedValue = await AsyncStorage.getItem(STORAGE_KEY_B);
      return storedValue !== null ? JSON.parse(storedValue) : false;
    } catch (error) {
      console.log('Error retrieving atom value:', error);
      return '';
    }
  },
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      onSet(async newValue => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY_B, JSON.stringify(newValue));
        } catch (error) {
          console.log('Error storing atom value:', error);
        }
      });

      const initializeValue = async () => {
        try {
          const storedValue = await AsyncStorage.getItem(STORAGE_KEY_B);
          const parsedValue = storedValue !== null ? JSON.parse(storedValue) : false;
          setSelf(parsedValue);
        } catch (error) {
          console.log('Error retrieving atom value:', error);
        }
      };
      initializeValue();
    },
  ],
});




// export const buildinglist = atom({
//   key: 'building',
//   default: async () => {
//     try {
//       const storedValue = await AsyncStorage.getItem(STORAGE_KEY_B);
//       return storedValue != null ? JSON.parse(storedValue) : false;
//     } catch (error) {
//       console.log('Error retrieving atom value:', error);
//       return '';
//     }
//   },
//   effects_UNSTABLE: [
//     ({setSelf, onSet}) => {
//       onSet(async newValue => {
//         try {
//           await AsyncStorage.setItem(STORAGE_KEY_B, JSON.stringify(newValue));
//         } catch (error) {
//           console.log('Error storing atom value:', error);
//         }
//       });
//       const initializeValue = async () => {
//         try {
//           const storedValue = await AsyncStorage.getItem(STORAGE_KEY_B);
//           const parsedValue =
//             storedValue !== null ? JSON.parse(storedValue) : false;
//           setSelf(parsedValue);
//         } catch (error) {
//           console.log('Error retrieving atom value:', error);
//         }
//       };
//       initializeValue();
//     },
//   ],
// });

// export const logintoken = atom({
//     key:'loginToken',
//     default:''
// })