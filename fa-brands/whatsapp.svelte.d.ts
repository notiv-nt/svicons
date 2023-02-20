/** @typedef {typeof __propDef.props}  WhatsappProps */
/** @typedef {typeof __propDef.events}  WhatsappEvents */
/** @typedef {typeof __propDef.slots}  WhatsappSlots */
export default class Whatsapp extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type WhatsappProps = typeof __propDef.props
export type WhatsappEvents = typeof __propDef.events
export type WhatsappSlots = typeof __propDef.slots
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
