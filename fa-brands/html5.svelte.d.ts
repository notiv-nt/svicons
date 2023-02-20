/** @typedef {typeof __propDef.props}  Html5Props */
/** @typedef {typeof __propDef.events}  Html5Events */
/** @typedef {typeof __propDef.slots}  Html5Slots */
export default class Html5 extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type Html5Props = typeof __propDef.props
export type Html5Events = typeof __propDef.events
export type Html5Slots = typeof __propDef.slots
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
