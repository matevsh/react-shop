import {
	Header,
	HoverCard,
	Group,
	Text,
	Divider,
	Center,
	Box,
	Burger,
	Flex,
	ActionIcon,
	Indicator,
	Stack,
	UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconShoppingCart } from '@tabler/icons';
import { useStyles } from './styles';
import { useCategories } from '../../queries/categoreies';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLink from './HeaderLink';
import HeaderMobile from './HeaderMobile';
import { useContext } from 'react';
import { CartCtx } from '../../providers/cart';

const MainHeader = () => {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const { classes, theme } = useStyles();

	const { products } = useContext(CartCtx);
	const navigate = useNavigate();
	const categories = useCategories();

	const links = categories.data?.map((category) => <HeaderLink category={category} key={category} />);

	return (
		<Box>
			<Header height={60} px="md">
				<Group position="apart" sx={{ height: '100%' }}>
					<Link to={'/'} style={{ textDecoration: 'none' }}>
						<UnstyledButton component={'p'}>react-shop</UnstyledButton>
					</Link>

					<Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
						<Link to={'/'} className={classes.link}>
							Home
						</Link>
						<HoverCard position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											Categories
										</Box>
										<IconChevronDown size={16} color={theme.fn.primaryColor()} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
								<Flex justify={'space-between'}>
									<Text>Categories</Text>
									<ActionIcon fw={700} onClick={() => navigate('/')}>
										All
									</ActionIcon>
								</Flex>

								<Divider my="sm" mx="-md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

								<Stack>{links}</Stack>
							</HoverCard.Dropdown>
						</HoverCard>
					</Group>
					<Flex align={'center'} gap={8}>
						<Indicator
							inline
							label={products.length}
							dot={false}
							color="indigo"
							size={16}
							position={'bottom-end'}
							showZero={false}
							offset={8}
							sx={{
								fontWeight: 'bold',
							}}
						>
							<ActionIcon
								sx={{
									background: 'none',
									border: 'none',
									cursor: 'pointer',
								}}
								size="xl"
							>
								<IconShoppingCart color={'white'} size={30} />
							</ActionIcon>
						</Indicator>
						<Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
					</Flex>
				</Group>
			</Header>

			<HeaderMobile
				drawerOpened={drawerOpened}
				closeDrawer={closeDrawer}
				linksOpened={linksOpened}
				toggleLinks={toggleLinks}
			>
				{links}
			</HeaderMobile>
		</Box>
	);
};

export default MainHeader;
