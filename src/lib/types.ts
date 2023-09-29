import type { ComponentProps } from 'svelte';
import type SlackMessage from './components/SlackMessage.svelte';

export type Messages = Omit<ComponentProps<SlackMessage>, 'img' | 'name'> & { id: number };
