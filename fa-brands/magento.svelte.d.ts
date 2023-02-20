/** @typedef {typeof __propDef.props}  MagentoProps */
/** @typedef {typeof __propDef.events}  MagentoEvents */
/** @typedef {typeof __propDef.slots}  MagentoSlots */
export default class Magento extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type MagentoProps = typeof __propDef.props
export type MagentoEvents = typeof __propDef.events
export type MagentoSlots = typeof __propDef.slots
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
