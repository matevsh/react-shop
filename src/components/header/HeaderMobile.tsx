import { Box, Center, Collapse, Divider, Drawer, ScrollArea, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { useStyles } from './styles';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
	drawerOpened: boolean;
	closeDrawer: () => void;
	toggleLinks: () => void;
	linksOpened: boolean;
	children: ReactNode;
};

const HeaderMobile = ({ drawerOpened, closeDrawer, toggleLinks, children, linksOpened }: Props) => {
	const { classes, theme } = useStyles();

	return (
		<Drawer
			opened={drawerOpened}
			onClose={closeDrawer}
			size="70%"
			padding="md"
			title="Navigation"
			className={classes.hiddenDesktop}
			zIndex={1000000}
		>
			<ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
				<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

				<Link to="/" className={classes.link} onClick={closeDrawer}>
					Home
				</Link>
				<UnstyledButton className={classes.link} onClick={toggleLinks}>
					<Center inline>
						<Box component="span" mr={5}>
							Features
						</Box>
						<IconChevronDown size={16} color={theme.fn.primaryColor()} />
					</Center>
				</UnstyledButton>
				<Collapse in={linksOpened} onClick={closeDrawer}>
					{children}
				</Collapse>

				<Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
			</ScrollArea>
		</Drawer>
	);
};

export default HeaderMobile;
