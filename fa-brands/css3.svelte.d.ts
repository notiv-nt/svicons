/** @typedef {typeof __propDef.props}  Css3Props */
/** @typedef {typeof __propDef.events}  Css3Events */
/** @typedef {typeof __propDef.slots}  Css3Slots */
export default class Css3 extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type Css3Props = typeof __propDef.props
export type Css3Events = typeof __propDef.events
export type Css3Slots = typeof __propDef.slots
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
