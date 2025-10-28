'use client'
import React from 'react'

export default function QuickExitButton() {
	// Minimal quick-exit behavior: navigate to a blank page.
	const handleClick = () => {
		window.location.href = 'about:blank'
	}

	return (
		<button
			type="button"
			onClick={handleClick}
			aria-label="Quick Exit"
			style={{
				padding: '6px 10px',
				fontSize: '14px',
				borderRadius: '6px',
				border: '1px solid #ccc',
				background: '#fff',
				cursor: 'pointer'
			}}
		>
			Exit
		</button>
	)
}
