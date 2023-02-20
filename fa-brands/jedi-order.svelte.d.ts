/** @typedef {typeof __propDef.props}  JediOrderProps */
/** @typedef {typeof __propDef.events}  JediOrderEvents */
/** @typedef {typeof __propDef.slots}  JediOrderSlots */
export default class JediOrder extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type JediOrderProps = typeof __propDef.props
export type JediOrderEvents = typeof __propDef.events
export type JediOrderSlots = typeof __propDef.slots
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
