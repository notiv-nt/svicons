/** @typedef {typeof __propDef.props}  MailProps */
/** @typedef {typeof __propDef.events}  MailEvents */
/** @typedef {typeof __propDef.slots}  MailSlots */
export default class Mail extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MailProps = typeof __propDef.props
export type MailEvents = typeof __propDef.events
export type MailSlots = typeof __propDef.slots
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
