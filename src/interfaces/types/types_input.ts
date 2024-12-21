export interface InputTypeProps {
    placeholder: string;
    value?: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean; 
  }