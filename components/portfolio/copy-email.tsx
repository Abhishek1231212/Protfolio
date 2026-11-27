'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy } from 'lucide-react'

/** Copies the email address and confirms it in place */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type='button'
      onClick={handleCopy}
      className='btn btn-plain lift glass text-ink'
      aria-label={copied ? 'Email copied' : 'Copy email address'}
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={copied ? 'done' : 'copy'}
          className='inline-flex items-center gap-2'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {copied ? <Check className='size-4 text-ember' /> : <Copy className='size-4' />}
          {copied ? 'Copied' : 'Copy email'}
        </motion.span>
      </AnimatePresence>
      <span aria-live='polite' className='sr-only'>
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  )
}
