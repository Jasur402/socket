export interface MessageData {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean; // true если сообщение отправлено текущим пользователем
}
