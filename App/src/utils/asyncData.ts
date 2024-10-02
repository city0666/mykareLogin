import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error retrieving data', e);
    return null;
  }
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error storing data', e);
  }
};


export const STORAGE_KEY_B = 'Building_data';
export const STORAGE_KEY_Token = 'Token';

