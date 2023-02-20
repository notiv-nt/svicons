/** @typedef {typeof __propDef.props}  UmbracoProps */
/** @typedef {typeof __propDef.events}  UmbracoEvents */
/** @typedef {typeof __propDef.slots}  UmbracoSlots */
export default class Umbraco extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type UmbracoProps = typeof __propDef.props
export type UmbracoEvents = typeof __propDef.events
export type UmbracoSlots = typeof __propDef.slots
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
