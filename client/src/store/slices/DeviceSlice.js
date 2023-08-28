import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _types: [
    { id: 1, name: "Холодильники" },
    { id: 2, name: "Смартфоны" },
  ],
  _brands: [
    { id: 1, name: "Samsung" },
    { id: 1, name: "Apple" },
  ],
  _devices: [
    {
      id: 1,
      name: "iphone12",
      price: 25000,
      rating: 5,
      img: "https://sterlitamak.istudio-shop.ru/a/istudio/files/multifile/2353/100032805910b0_1.webp",
    },
    {
      id: 1,
      name: "iphone12",
      price: 25000,
      rating: 5,
      img: "https://sterlitamak.istudio-shop.ru/a/istudio/files/multifile/2353/100032805910b0_1.webp",
    },
    {
      id: 1,
      name: "iphone12",
      price: 25000,
      rating: 5,
      img: "https://sterlitamak.istudio-shop.ru/a/istudio/files/multifile/2353/100032805910b0_1.webp",
    },
    {
      id: 1,
      name: "iphone12",
      price: 25000,
      rating: 5,
      img: "https://sterlitamak.istudio-shop.ru/a/istudio/files/multifile/2353/100032805910b0_1.webp",
    },
    {
      id: 1,
      name: "iphone12",
      price: 25000,
      rating: 5,
      img: "https://sterlitamak.istudio-shop.ru/a/istudio/files/multifile/2353/100032805910b0_1.webp",
    },
  ],
};

export const deviceSlice = createSlice({
  name: "deviceStore",
  initialState,
  reducers: {
    setType: (state, types) => {
      state._types = types;
    },
    setBrand: (state, brands) => {
      state._brands = brands;
    },
    setDevice: (state, devices) => {
      state._devices = devices;
    },
  },
});

export const { setType, setBrand, setDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
