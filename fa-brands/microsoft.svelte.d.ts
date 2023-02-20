/** @typedef {typeof __propDef.props}  MicrosoftProps */
/** @typedef {typeof __propDef.events}  MicrosoftEvents */
/** @typedef {typeof __propDef.slots}  MicrosoftSlots */
export default class Microsoft extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MicrosoftProps = typeof __propDef.props
export type MicrosoftEvents = typeof __propDef.events
export type MicrosoftSlots = typeof __propDef.slots
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
