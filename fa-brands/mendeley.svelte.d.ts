/** @typedef {typeof __propDef.props}  MendeleyProps */
/** @typedef {typeof __propDef.events}  MendeleyEvents */
/** @typedef {typeof __propDef.slots}  MendeleySlots */
export default class Mendeley extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MendeleyProps = typeof __propDef.props
export type MendeleyEvents = typeof __propDef.events
export type MendeleySlots = typeof __propDef.slots
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
