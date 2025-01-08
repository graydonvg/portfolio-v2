import { create } from "zustand";

type FormState = {
  formHasError: boolean;
  setFormHasError: (hasError: boolean) => void;
};

const useFormStore = create<FormState>((set) => ({
  formHasError: false,
  setFormHasError: (hasError) => set({ formHasError: hasError }),
}));

export default useFormStore;
