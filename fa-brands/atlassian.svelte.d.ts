/** @typedef {typeof __propDef.props}  AtlassianProps */
/** @typedef {typeof __propDef.events}  AtlassianEvents */
/** @typedef {typeof __propDef.slots}  AtlassianSlots */
export default class Atlassian extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AtlassianProps = typeof __propDef.props
export type AtlassianEvents = typeof __propDef.events
export type AtlassianSlots = typeof __propDef.slots
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
