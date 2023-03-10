/** @typedef {typeof __propDef.props}  MenuProps */
/** @typedef {typeof __propDef.events}  MenuEvents */
/** @typedef {typeof __propDef.slots}  MenuSlots */
export default class Menu extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MenuProps = typeof __propDef.props
export type MenuEvents = typeof __propDef.events
export type MenuSlots = typeof __propDef.slots
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
