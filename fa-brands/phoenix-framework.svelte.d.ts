/** @typedef {typeof __propDef.props}  PhoenixFrameworkProps */
/** @typedef {typeof __propDef.events}  PhoenixFrameworkEvents */
/** @typedef {typeof __propDef.slots}  PhoenixFrameworkSlots */
export default class PhoenixFramework extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type PhoenixFrameworkProps = typeof __propDef.props
export type PhoenixFrameworkEvents = typeof __propDef.events
export type PhoenixFrameworkSlots = typeof __propDef.slots
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
