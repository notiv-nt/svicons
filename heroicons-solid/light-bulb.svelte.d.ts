/** @typedef {typeof __propDef.props}  LightBulbProps */
/** @typedef {typeof __propDef.events}  LightBulbEvents */
/** @typedef {typeof __propDef.slots}  LightBulbSlots */
export default class LightBulb extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type LightBulbProps = typeof __propDef.props
export type LightBulbEvents = typeof __propDef.events
export type LightBulbSlots = typeof __propDef.slots
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
