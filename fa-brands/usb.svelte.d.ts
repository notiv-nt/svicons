/** @typedef {typeof __propDef.props}  UsbProps */
/** @typedef {typeof __propDef.events}  UsbEvents */
/** @typedef {typeof __propDef.slots}  UsbSlots */
export default class Usb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UsbProps = typeof __propDef.props
export type UsbEvents = typeof __propDef.events
export type UsbSlots = typeof __propDef.slots
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
