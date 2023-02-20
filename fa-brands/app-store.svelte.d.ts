/** @typedef {typeof __propDef.props}  AppStoreProps */
/** @typedef {typeof __propDef.events}  AppStoreEvents */
/** @typedef {typeof __propDef.slots}  AppStoreSlots */
export default class AppStore extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AppStoreProps = typeof __propDef.props
export type AppStoreEvents = typeof __propDef.events
export type AppStoreSlots = typeof __propDef.slots
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
