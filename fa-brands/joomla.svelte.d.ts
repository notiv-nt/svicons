/** @typedef {typeof __propDef.props}  JoomlaProps */
/** @typedef {typeof __propDef.events}  JoomlaEvents */
/** @typedef {typeof __propDef.slots}  JoomlaSlots */
export default class Joomla extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JoomlaProps = typeof __propDef.props
export type JoomlaEvents = typeof __propDef.events
export type JoomlaSlots = typeof __propDef.slots
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
