import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project import
import { activeItem } from '../../../../../actions/menu/menu';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const openItem = useSelector((state) => state.menu.openItem);
    const drawerOpen = useSelector((state) => state.menu.drawerOpen);
    // console.log(menu);
    // const { drawerOpen, openItem } = menu;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_self';
    }

    let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch(activeItem({ openItem: [id] }));
    };

    const Icon = item.icon;
    const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = 'text.primary';
    const iconSelectedColor = "#EC6E46";

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            onClick={() => itemHandler(item.id)}
            selected={isSelected}
            sx={{
                zIndex: 1201,
                pl: drawerOpen ? `${level * 28}px` : 1.5,
                py: !drawerOpen && level === 1 ? 1.25 : 1,
                ...(drawerOpen && {
                    '&:hover': {
                        bgcolor: ' rgba(236, 110, 70, 0.1)'
                    },
                    '&.Mui-selected': {
                        bgcolor: ' rgba(236, 110, 70, 0.1)',
                        borderRight: '2px solid #EC646',
                        color: iconSelectedColor,
                        '&:hover': {
                            color: iconSelectedColor,
                            bgcolor: ' rgba(236, 110, 70, 0.1)'
                        }
                    }
                }),
                ...(!drawerOpen && {
                    '&:hover': {
                        bgcolor: 'transparent'
                    },
                    '&.Mui-selected': {
                        '&:hover': {
                            bgcolor: 'transparent'
                        },
                        bgcolor: 'transparent'
                    }
                })
            }}
        >
            {itemIcon && (
                <ListItemIcon
                    sx={{
                        minWidth: 28,
                        color: isSelected ? iconSelectedColor : textColor,
                        ...(!drawerOpen && {
                            borderRadius: 1.5,
                            width: 36,
                            height: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                                bgcolor: 'rgba(236, 110, 70, 0.1)'
                            }
                        }),
                        ...(!drawerOpen &&
                            isSelected && {
                                bgcolor: ' rgba(236, 110, 70, 0.1)',
                                '&:hover': {
                                    bgcolor: ' rgba(236, 110, 70, 0.1)'
                                }
                            })
                    }}
                >
                    {itemIcon}
                </ListItemIcon>
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) && (
                <ListItemText
                    primary={
                        <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                            {item.title}
                        </Typography>
                    }
                />
            )}
            {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
