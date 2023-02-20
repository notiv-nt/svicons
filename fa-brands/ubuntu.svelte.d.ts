/** @typedef {typeof __propDef.props}  UbuntuProps */
/** @typedef {typeof __propDef.events}  UbuntuEvents */
/** @typedef {typeof __propDef.slots}  UbuntuSlots */
export default class Ubuntu extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UbuntuProps = typeof __propDef.props
export type UbuntuEvents = typeof __propDef.events
export type UbuntuSlots = typeof __propDef.slots
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
