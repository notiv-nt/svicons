/** @typedef {typeof __propDef.props}  Typo3Props */
/** @typedef {typeof __propDef.events}  Typo3Events */
/** @typedef {typeof __propDef.slots}  Typo3Slots */
export default class Typo3 extends SvelteComponentTyped<
  {
    [x: string]: any
  },
  {
    [evt: string]: CustomEvent<any>
  },
  {}
> {}
export type Typo3Props = typeof __propDef.props
export type Typo3Events = typeof __propDef.events
export type Typo3Slots = typeof __propDef.slots
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
