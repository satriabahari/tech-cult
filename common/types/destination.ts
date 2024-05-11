export interface DestinationProps {
  id: number;
  title: string;
  description: string;
  image: string;
  by: string;
  location: string;
  icon?: JSX.Element
  length_journey: string;
  isShow?: boolean;
}
