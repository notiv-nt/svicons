/** @typedef {typeof __propDef.props}  LinkedinProps */
/** @typedef {typeof __propDef.events}  LinkedinEvents */
/** @typedef {typeof __propDef.slots}  LinkedinSlots */
export default class Linkedin extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LinkedinProps = typeof __propDef.props
export type LinkedinEvents = typeof __propDef.events
export type LinkedinSlots = typeof __propDef.slots
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
