export interface IDogData {
  message: string;
  status: string;
}
export interface IErrorResponse {
  message: string;
}
export interface ILoading {
  loading: boolean;
}
export interface ICardProps {
  background: string;
  link: string;
  title: string;
  description: string;
}
export interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
}
export interface IAlertProps {
  title: string;
  message: string;
}
