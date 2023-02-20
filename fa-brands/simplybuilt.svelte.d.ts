/** @typedef {typeof __propDef.props}  SimplybuiltProps */
/** @typedef {typeof __propDef.events}  SimplybuiltEvents */
/** @typedef {typeof __propDef.slots}  SimplybuiltSlots */
export default class Simplybuilt extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type SimplybuiltProps = typeof __propDef.props
export type SimplybuiltEvents = typeof __propDef.events
export type SimplybuiltSlots = typeof __propDef.slots
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
