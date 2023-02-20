/** @typedef {typeof __propDef.props}  HotjarProps */
/** @typedef {typeof __propDef.events}  HotjarEvents */
/** @typedef {typeof __propDef.slots}  HotjarSlots */
export default class Hotjar extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type HotjarProps = typeof __propDef.props
export type HotjarEvents = typeof __propDef.events
export type HotjarSlots = typeof __propDef.slots
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
