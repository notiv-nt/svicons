/** @typedef {typeof __propDef.props}  TelegramProps */
/** @typedef {typeof __propDef.events}  TelegramEvents */
/** @typedef {typeof __propDef.slots}  TelegramSlots */
export default class Telegram extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type TelegramProps = typeof __propDef.props
export type TelegramEvents = typeof __propDef.events
export type TelegramSlots = typeof __propDef.slots
import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
  props: {
    [x: string]: any
  }
  events: {
    [evt: string]: CustomEvent<any>
  }
  slots: {}
}
export {}
