/** @typedef {typeof __propDef.props}  AwsProps */
/** @typedef {typeof __propDef.events}  AwsEvents */
/** @typedef {typeof __propDef.slots}  AwsSlots */
export default class Aws extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type AwsProps = typeof __propDef.props
export type AwsEvents = typeof __propDef.events
export type AwsSlots = typeof __propDef.slots
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
