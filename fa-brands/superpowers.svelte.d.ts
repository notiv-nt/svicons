/** @typedef {typeof __propDef.props}  SuperpowersProps */
/** @typedef {typeof __propDef.events}  SuperpowersEvents */
/** @typedef {typeof __propDef.slots}  SuperpowersSlots */
export default class Superpowers extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SuperpowersProps = typeof __propDef.props
export type SuperpowersEvents = typeof __propDef.events
export type SuperpowersSlots = typeof __propDef.slots
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
