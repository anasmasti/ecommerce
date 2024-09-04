import { CART_EVENTS } from '../enums/CartEvents.enum';

type CartEvent = (typeof CART_EVENTS)[keyof typeof CART_EVENTS];
export type CartEventPayload = { event: CartEvent; productId?: number };
