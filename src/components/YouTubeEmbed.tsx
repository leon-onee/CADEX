import { Box } from '@mui/material'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

type YouTubeEmbedProps = {
	videoId: string
	width?: string
	height?: string
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
	videoId,
	width,
	height,
}) => {
	const [isIframeLoaded, setIsIframeLoaded] = useState(false)

	const handleClick = () => {
		setIsIframeLoaded(true)
	}

	return (
		<Box
			position='relative'
			width={'100%'}
			height={height || '100%'}
			overflow='hidden'
			sx={{
				borderRadius: 2,
				maxWidth: {
					xs: '100%',
					md: width,
				},
			}}
		>
			{!isIframeLoaded ? (
				<Box
					onClick={handleClick}
					component='img'
					src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
					alt='Видео превью'
					sx={{
						width: '100%',
						height: '100%',
						cursor: 'pointer',
						objectFit: 'cover',
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				/>
			) : (
				<ReactPlayer
					url={`https://www.youtube.com/embed/${videoId}?autoplay=1&muted=1`}
					playing={true}
					width={'100%'}
					height={'100%'}
					controls={true}
				/>
			)}

			{!isIframeLoaded && (
				<Box
					component='button'
					width='68px'
					height='48px'
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						bgcolor: 'transparent',
						border: 'none',
						pointerEvents: 'none',
					}}
					aria-label='play video'
				>
					<svg height='100%' version='1.1' viewBox='0 0 68 48' width='100%'>
						<path
							d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'
							fill='#f00'
						></path>
						<path d='M 45,24 27,14 27,34' fill='#fff'></path>
					</svg>
				</Box>
			)}
		</Box>
	)
}

export default YouTubeEmbed
