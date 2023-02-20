/** @typedef {typeof __propDef.props}  VkProps */
/** @typedef {typeof __propDef.events}  VkEvents */
/** @typedef {typeof __propDef.slots}  VkSlots */
export default class Vk extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type VkProps = typeof __propDef.props
export type VkEvents = typeof __propDef.events
export type VkSlots = typeof __propDef.slots
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
