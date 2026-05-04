'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from '@/components/providers/ThemeProvider'

function subscribe() { return () => {} }
function getSnapshot() { return true }
function getServerSnapshot() { return false }

function useIsClient() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

interface TopbarProps {
  title?: string
}

export function Topbar({ title }: TopbarProps) {
  const { theme, toggle } = useTheme()
  const isClient = useIsClient()

  return (
    <header
      style={{
        height: 'var(--topbar-height)',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 30,
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--text-secondary)',
          letterSpacing: '0.01em',
        }}
      >
        {title ?? 'HELM'}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={toggle}
          title={isClient ? (theme === 'dark' ? 'Switch to light' : 'Switch to dark') : 'Toggle theme'}
          style={{
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            border: '1px solid var(--border)',
            background: 'var(--bg-raised)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 14,
            transition: 'all 0.15s',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-strong)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
            ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
          }}
        >
          {isClient ? (theme === 'dark' ? '☀' : '◑') : '◑'}
        </button>
      </div>
    </header>
  )
}