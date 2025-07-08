import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

export function Card({ children, className }: CardProps) {
	return (
		<div
			className={cn(
				'bg-zinc-50 dark:bg-zinc-900 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg',
				className
			)}>
			{children}
		</div>
	)
}

interface CardHeaderProps {
	children: ReactNode
	className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
	return (
		<div className={cn('space-y-4', className)}>
			<div className='flex space-y-4 items-start justify-between'>
				{children}
			</div>
		</div>
	)
}

interface CardTitleProps {
	children: ReactNode
	className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
	return (
		<h3 className={cn('font-semibold text-lg text-foreground', className)}>
			{children}
		</h3>
	)
}

interface CardContentProps {
	children: ReactNode
	className?: string
}

export function CardContent({ children, className }: CardContentProps) {
	return <div className={cn('space-y-4', className)}>{children}</div>
}

interface CardDescriptionProps {
	children: ReactNode
	className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
	return (
		<p
			className={cn(
				'text-muted-foreground font-inter leading-relaxed',
				className
			)}>
			{children}
		</p>
	)
}

interface CardBadgeProps {
	children: ReactNode
	className?: string
}

export function CardBadge({ children, className }: CardBadgeProps) {
	return (
		<span
			className={cn(
				'text-sm text-primary bg-zinc-200/50 dark:bg-zinc-700 px-3 py-1 rounded-full',
				className
			)}>
			{children}
		</span>
	)
}

interface CardSkill {
	icon?: React.ReactNode
	label: string
	className?: string
}

export function CardSkill({ icon, label, className }: CardSkill) {
	return (
		<span
			className={cn(
				'flex items-center gap-2 bg-zinc-200/50 dark:bg-zinc-700 text-primary px-3 py-1 rounded-full text-sm font-medium',
				className
			)}>
			{icon}
			{label}
		</span>
	)
}
