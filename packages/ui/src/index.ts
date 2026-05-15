// Existing (legacy naming)
export { HeroPrimary } from './heroes/Primary'
export type { HeroPrimaryProps } from './heroes/Primary'

// Shared hero parts (used by all Hero variants)
export { HeroTitle, HeroSubtitle, HeroActions, HeroEyebrow } from './heroes/Parts'

export { HeroSplit, HeroSplitContent, HeroSplitVisual } from './heroes/Split'
export type { HeroSplitProps, HeroSplitSide } from './heroes/Split'

export { HeroCentered } from './heroes/Centered'
export type { HeroCenteredProps } from './heroes/Centered'

export {
  HeroWithVideo,
  HeroWithVideoBg,
  HeroWithVideoOverlay,
  HeroWithVideoContent,
} from './heroes/WithVideo'
export type { HeroWithVideoProps, HeroWithVideoBgProps } from './heroes/WithVideo'

export { HeroWithGradient } from './heroes/WithGradient'
export type { HeroWithGradientProps, HeroGradientPreset } from './heroes/WithGradient'

export { ButtonPrimary } from './buttons/Primary'
export type { ButtonPrimaryProps } from './buttons/Primary'

export { ButtonGhost } from './buttons/Ghost'
export type { ButtonGhostProps } from './buttons/Ghost'

export { InputRounded } from './inputs/Rounded'
export type { InputRoundedProps, InputState } from './inputs/Rounded'

export { GradientH2 } from './headings/GradientH2'
export type { GradientH2Props } from './headings/GradientH2'

export { HeadingDefault } from './headings/Default'
export type { HeadingDefaultProps } from './headings/Default'

export { ResultText } from './results/Text'
export type { ResultTextProps } from './results/Text'

// Shadcn-aligned primitives
export { AccordionDefault, AccordionItem, AccordionTrigger, AccordionContent } from './accordions/Default'
export type { AccordionDefaultProps, AccordionType, AccordionVariant } from './accordions/Default'

export { AlertDefault, AlertTitle, AlertDescription } from './alerts/Default'
export type { AlertDefaultProps, AlertTitleProps, AlertDescriptionProps, AlertVariant } from './alerts/Default'

export {
  AlertDialogDefault,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './alertDialogs/Default'
export type { AlertDialogDefaultProps } from './alertDialogs/Default'

export { AspectRatioDefault } from './aspectRatios/Default'
export type { AspectRatioDefaultProps } from './aspectRatios/Default'

export { AvatarDefault, AvatarImage, AvatarFallback } from './avatars/Default'
export type { AvatarDefaultProps, AvatarImageProps, AvatarFallbackProps } from './avatars/Default'

export { AvatarWithStatus, AvatarStatusDot } from './avatars/WithStatus'
export type { AvatarWithStatusProps, AvatarStatusDotProps, AvatarStatus } from './avatars/WithStatus'

export { AvatarGroup, AvatarGroupOverflow } from './avatars/Group'
export type { AvatarGroupProps, AvatarGroupOverflowProps } from './avatars/Group'

export { BadgeDefault } from './badges/Default'
export type { BadgeDefaultProps, BadgeVariant } from './badges/Default'

export {
  BreadcrumbDefault,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumbs/Default'
export type {
  BreadcrumbDefaultProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
} from './breadcrumbs/Default'

export {
  BreadcrumbWithDropdown,
  BreadcrumbDropdown,
  BreadcrumbDropdownTrigger,
  BreadcrumbDropdownContent,
} from './breadcrumbs/WithDropdown'
export type { BreadcrumbWithDropdownProps, BreadcrumbDropdownProps } from './breadcrumbs/WithDropdown'

export { ButtonDefault } from './buttons/Default'
export type { ButtonDefaultProps, ButtonVariant, ButtonSize } from './buttons/Default'

export { ButtonIcon } from './buttons/Icon'
export type { ButtonIconProps, ButtonIconSize } from './buttons/Icon'

export { ButtonLoading } from './buttons/Loading'
export type { ButtonLoadingProps } from './buttons/Loading'

export { CalendarDefault } from './calendars/Default'
export type { CalendarDefaultProps } from './calendars/Default'

export { CalendarRange } from './calendars/Range'
export type { CalendarRangeProps, CalendarRangeValue } from './calendars/Range'

export { CalendarMultiple } from './calendars/Multiple'
export type { CalendarMultipleProps } from './calendars/Multiple'

export { CardDefault, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './cards/Default'
export type { CardDefaultProps } from './cards/Default'

export {
  CardStat,
  CardStatLabel,
  CardStatValue,
  CardStatTrend,
  CardStatDescription,
} from './cards/Stat'
export type { CardStatProps, CardStatTrendProps, CardStatTrendDirection } from './cards/Stat'

export {
  CardProfile,
  CardProfileAvatar,
  CardProfileName,
  CardProfileRole,
  CardProfileBio,
  CardProfileActions,
} from './cards/Profile'
export type { CardProfileProps, CardProfileAvatarProps } from './cards/Profile'

export { CardMedia, CardMediaImage } from './cards/Media'
export type { CardMediaProps, CardMediaImageProps, CardMediaPosition } from './cards/Media'

export {
  CardPricing,
  CardPricingHeader,
  CardPricingName,
  CardPricingPrice,
  CardPricingFeatures,
  CardPricingFeature,
  CardPricingCta,
} from './cards/Pricing'
export type {
  CardPricingProps,
  CardPricingPriceProps,
  CardPricingFeatureProps,
} from './cards/Pricing'

export { CardInteractive } from './cards/Interactive'
export type {
  CardInteractiveProps,
  CardInteractiveAsButtonProps,
  CardInteractiveAsAnchorProps,
} from './cards/Interactive'

export { CarouselDefault, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousels/Default'
export type { CarouselDefaultProps, CarouselOrientation } from './carousels/Default'

export { ChartDefault } from './charts/Default'
export type { ChartDefaultProps } from './charts/Default'

export { ChartBar } from './charts/Bar'
export type { ChartBarProps, ChartDatum } from './charts/Bar'

export { ChartLine } from './charts/Line'
export type { ChartLineProps } from './charts/Line'

export { ChartArea } from './charts/Area'
export type { ChartAreaProps } from './charts/Area'

export { ChartPie } from './charts/Pie'
export type { ChartPieProps } from './charts/Pie'

export { ChartRadar } from './charts/Radar'
export type { ChartRadarProps, ChartRadarDatum } from './charts/Radar'

export { CheckboxDefault } from './checkboxes/Default'
export type { CheckboxDefaultProps } from './checkboxes/Default'

export { CollapsibleDefault, CollapsibleTrigger, CollapsibleContent } from './collapsibles/Default'
export type { CollapsibleDefaultProps } from './collapsibles/Default'

export { ComboboxDefault } from './comboboxes/Default'
export type { ComboboxDefaultProps, ComboboxOption } from './comboboxes/Default'

export { ComboboxMulti } from './comboboxes/Multi'
export type { ComboboxMultiProps } from './comboboxes/Multi'

export {
  CommandDefault,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from './commands/Default'
export type { CommandDefaultProps, CommandInputProps, CommandGroupProps, CommandItemProps } from './commands/Default'

export {
  ContextMenuDefault,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuLabel,
  ContextMenuGroup,
} from './contextMenus/Default'
export type { ContextMenuDefaultProps } from './contextMenus/Default'

export { DataTableDefault } from './dataTables/Default'
export type { DataTableDefaultProps, DataTableColumn } from './dataTables/Default'

export { DatePickerDefault } from './datePickers/Default'
export type { DatePickerDefaultProps } from './datePickers/Default'

export { DatePickerRange } from './datePickers/Range'
export type { DatePickerRangeProps } from './datePickers/Range'

export { DatePickerMultiple } from './datePickers/Multiple'
export type { DatePickerMultipleProps } from './datePickers/Multiple'

export {
  DialogDefault,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialogs/Default'
export type { DialogDefaultProps, DialogVariant } from './dialogs/Default'

export {
  DrawerDefault,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from './drawers/Default'
export type { DrawerDefaultProps, DrawerSide } from './drawers/Default'

export {
  DropdownMenuDefault,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
} from './dropdownMenus/Default'
export type { DropdownMenuDefaultProps } from './dropdownMenus/Default'

export {
  FormDefault,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './forms/Default'
export type { FormDefaultProps } from './forms/Default'

export { HoverCardDefault, HoverCardTrigger, HoverCardContent } from './hoverCards/Default'
export type { HoverCardDefaultProps, HoverCardTriggerProps, HoverCardContentProps } from './hoverCards/Default'

export { InputDefault } from './inputs/Default'
export type { InputDefaultProps } from './inputs/Default'

export { InputEmail } from './inputs/Email'
export type { InputEmailProps } from './inputs/Email'

export { InputPassword } from './inputs/Password'
export type { InputPasswordProps } from './inputs/Password'

export { InputSearch } from './inputs/Search'
export type { InputSearchProps } from './inputs/Search'

export { InputNumber } from './inputs/Number'
export type { InputNumberProps } from './inputs/Number'

export { InputFile } from './inputs/File'
export type { InputFileProps } from './inputs/File'

export { InputDate } from './inputs/Date'
export type { InputDateProps } from './inputs/Date'

export { InputWithIcon } from './inputs/WithIcon'
export type { InputWithIconProps, InputIconPosition } from './inputs/WithIcon'

export { InputWithPrefix } from './inputs/WithPrefix'
export type { InputWithPrefixProps } from './inputs/WithPrefix'

export { InputWithSuffix } from './inputs/WithSuffix'
export type { InputWithSuffixProps } from './inputs/WithSuffix'

export { InputOtpDefault, InputOtpGroup, InputOtpSlot, InputOtpSeparator } from './inputOtps/Default'
export type { InputOtpDefaultProps, InputOtpSlotProps } from './inputOtps/Default'

export { LabelDefault } from './labels/Default'
export type { LabelDefaultProps } from './labels/Default'

export {
  MenubarDefault,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from './menubars/Default'
export type { MenubarDefaultProps, MenubarItemProps } from './menubars/Default'

export {
  NavigationMenuDefault,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './navigationMenus/Default'
export type { NavigationMenuDefaultProps } from './navigationMenus/Default'

export {
  NavigationMenuMobile,
  NavigationMenuMobileTrigger,
  NavigationMenuMobileDrawer,
  NavigationMenuMobileClose,
} from './navigationMenus/Mobile'
export type { NavigationMenuMobileProps } from './navigationMenus/Mobile'

export {
  NavigationMenuMega,
  NavigationMenuMegaContent,
  NavigationMenuMegaColumns,
  NavigationMenuMegaColumn,
  NavigationMenuMegaGroup,
  NavigationMenuMegaGroupTitle,
} from './navigationMenus/Mega'
export type { NavigationMenuMegaProps, NavigationMenuMegaColumnsProps } from './navigationMenus/Mega'

export {
  PaginationDefault,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './paginations/Default'
export type { PaginationDefaultProps, PaginationLinkProps, PaginationVariant } from './paginations/Default'

export {
  PaginationWithPageSize,
  PaginationPageSize,
  PaginationPageSizeLabel,
  PaginationPageSizeSelect,
} from './paginations/WithPageSize'
export type { PaginationWithPageSizeProps, PaginationPageSizeSelectProps } from './paginations/WithPageSize'

export { PopoverDefault, PopoverTrigger, PopoverContent } from './popovers/Default'
export type { PopoverDefaultProps, PopoverTriggerProps, PopoverContentProps } from './popovers/Default'

export { ProgressDefault } from './progresses/Default'
export type { ProgressDefaultProps } from './progresses/Default'

export { ProgressCircular } from './progresses/Circular'
export type { ProgressCircularProps } from './progresses/Circular'

export { ProgressStepped } from './progresses/Stepped'
export type { ProgressSteppedProps, ProgressStepState } from './progresses/Stepped'

export { RadioGroupDefault, RadioGroupItem } from './radioGroups/Default'
export type { RadioGroupDefaultProps, RadioGroupItemProps } from './radioGroups/Default'

export { ResizableDefault, ResizablePanel, ResizableHandle } from './resizables/Default'
export type { ResizableDefaultProps, ResizablePanelProps, ResizableHandleProps, ResizableDirection } from './resizables/Default'

export { ScrollAreaDefault, ScrollAreaViewport, ScrollBar } from './scrollAreas/Default'
export type { ScrollAreaDefaultProps, ScrollBarProps } from './scrollAreas/Default'

export {
  SelectDefault,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from './selects/Default'
export type { SelectDefaultProps } from './selects/Default'

export { SeparatorDefault } from './separators/Default'
export type { SeparatorDefaultProps, SeparatorOrientation, SeparatorVariant } from './separators/Default'

export { SeparatorWithLabel } from './separators/WithLabel'
export type { SeparatorWithLabelProps, SeparatorWithLabelAlign } from './separators/WithLabel'

export {
  SheetDefault,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheets/Default'
export type { SheetDefaultProps, SheetSide } from './sheets/Default'

export {
  SidebarDefault,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from './sidebars/Default'
export type { SidebarDefaultProps, SidebarSide, SidebarVariant, SidebarMenuButtonProps } from './sidebars/Default'

export { SkeletonDefault } from './skeletons/Default'
export type { SkeletonDefaultProps } from './skeletons/Default'

export { SkeletonText } from './skeletons/Text'
export type { SkeletonTextProps } from './skeletons/Text'

export { SkeletonCircle } from './skeletons/Circle'
export type { SkeletonCircleProps } from './skeletons/Circle'

export { SkeletonCard } from './skeletons/Card'
export type { SkeletonCardProps } from './skeletons/Card'

export { SliderDefault } from './sliders/Default'
export type { SliderDefaultProps } from './sliders/Default'

export { SliderRange } from './sliders/Range'
export type { SliderRangeProps, SliderRangeValue } from './sliders/Range'

export { SonnerDefault } from './sonners/Default'
export type { SonnerDefaultProps, SonnerPosition } from './sonners/Default'

export { SwitchDefault } from './switches/Default'
export type { SwitchDefaultProps } from './switches/Default'

export {
  TableDefault,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './tables/Default'
export type { TableDefaultProps } from './tables/Default'

export { TabDefault, TabList, TabTrigger, TabContent } from './tabs/Default'
export type { TabDefaultProps, TabListProps, TabTriggerProps, TabContentProps, TabVariant } from './tabs/Default'

export { TabVertical, TabVerticalList, TabVerticalPanels } from './tabs/Vertical'
export type { TabVerticalProps, TabVerticalListProps, TabVerticalPanelsProps } from './tabs/Vertical'

export { TextareaDefault } from './textareas/Default'
export type { TextareaDefaultProps } from './textareas/Default'

export {
  ToastDefault,
  ToastAction,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from './toasts/Default'
export type { ToastDefaultProps, ToastVariant } from './toasts/Default'

export { ToggleDefault } from './toggles/Default'
export type { ToggleDefaultProps } from './toggles/Default'

export { ToggleGroupDefault, ToggleGroupItem } from './toggleGroups/Default'
export type { ToggleGroupDefaultProps, ToggleGroupItemProps } from './toggleGroups/Default'

export { TooltipDefault, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltips/Default'
export type { TooltipDefaultProps, TooltipTriggerProps, TooltipContentProps, TooltipProviderProps } from './tooltips/Default'

export {
  TooltipRich,
  TooltipRichTrigger,
  TooltipRichContent,
  TooltipRichTitle,
  TooltipRichDescription,
  TooltipRichActions,
} from './tooltips/Rich'
export type { TooltipRichProps } from './tooltips/Rich'

// Site chrome (v0.5)
export { HeaderDefault, HeaderBrand, HeaderNav, HeaderActions } from './headers/Default'
export type { HeaderDefaultProps, HeaderVariant } from './headers/Default'

export {
  FooterDefault,
  FooterColumns,
  FooterColumn,
  FooterColumnTitle,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterCopyright,
  FooterLegalLinks,
  FooterSocial,
} from './footers/Default'
export type {
  FooterDefaultProps,
  FooterVariant,
  FooterColumnsProps,
  FooterLinkProps,
} from './footers/Default'

// Semantic layout primitives (v0.5)
export { LayoutHeader } from './layouts/Header'
export type { LayoutHeaderProps } from './layouts/Header'
export { LayoutFooter } from './layouts/Footer'
export type { LayoutFooterProps } from './layouts/Footer'
export { LayoutMain } from './layouts/Main'
export type { LayoutMainProps } from './layouts/Main'
export { LayoutNav } from './layouts/Nav'
export type { LayoutNavProps } from './layouts/Nav'
export { LayoutSection } from './layouts/Section'
export type { LayoutSectionProps } from './layouts/Section'
export { LayoutArticle } from './layouts/Article'
export type { LayoutArticleProps } from './layouts/Article'

export { GridDefault } from './grids/Default'
export type { GridDefaultProps } from './grids/Default'

export { ContainerDefault } from './containers/Default'
export type { ContainerDefaultProps } from './containers/Default'

// ------------------------------------------------------------------ //
// Short-name aliases (v0.4.4+)
// Drop the `Default` suffix when there's no ambiguity. Both names point
// to the exact same component — pick whichever reads better in your
// code. Sub-parts (CardHeader, DialogTitle, etc.) keep their flat names
// to match shadcn-style usage.
// ------------------------------------------------------------------ //

export { AccordionDefault as Accordion } from './accordions/Default'
export { AlertDefault as Alert } from './alerts/Default'
export { AlertDialogDefault as AlertDialog } from './alertDialogs/Default'
export { AspectRatioDefault as AspectRatio } from './aspectRatios/Default'
export { AvatarDefault as Avatar } from './avatars/Default'
export { BadgeDefault as Badge } from './badges/Default'
export { BreadcrumbDefault as Breadcrumb } from './breadcrumbs/Default'
export { ButtonDefault as Button } from './buttons/Default'
export { CalendarDefault as Calendar } from './calendars/Default'
export { CardDefault as Card } from './cards/Default'
export { CarouselDefault as Carousel } from './carousels/Default'
export { ChartDefault as Chart } from './charts/Default'
export { CheckboxDefault as Checkbox } from './checkboxes/Default'
export { CollapsibleDefault as Collapsible } from './collapsibles/Default'
export { ComboboxDefault as Combobox } from './comboboxes/Default'
export { CommandDefault as Command } from './commands/Default'
export { ContextMenuDefault as ContextMenu } from './contextMenus/Default'
export { DataTableDefault as DataTable } from './dataTables/Default'
export { DatePickerDefault as DatePicker } from './datePickers/Default'
export { DialogDefault as Dialog } from './dialogs/Default'
export { DrawerDefault as Drawer } from './drawers/Default'
export { DropdownMenuDefault as DropdownMenu } from './dropdownMenus/Default'
export { FormDefault as Form } from './forms/Default'
export { HoverCardDefault as HoverCard } from './hoverCards/Default'
export { InputDefault as Input } from './inputs/Default'
export { InputOtpDefault as InputOtp } from './inputOtps/Default'
export { LabelDefault as Label } from './labels/Default'
export { MenubarDefault as Menubar } from './menubars/Default'
export { NavigationMenuDefault as NavigationMenu } from './navigationMenus/Default'
export { PaginationDefault as Pagination } from './paginations/Default'
export { PopoverDefault as Popover } from './popovers/Default'
export { ProgressDefault as Progress } from './progresses/Default'
export { RadioGroupDefault as RadioGroup } from './radioGroups/Default'
export { ResizableDefault as Resizable } from './resizables/Default'
export { ScrollAreaDefault as ScrollArea } from './scrollAreas/Default'
export { SelectDefault as Select } from './selects/Default'
export { SeparatorDefault as Separator } from './separators/Default'
export { SheetDefault as Sheet } from './sheets/Default'
export { SidebarDefault as Sidebar } from './sidebars/Default'
export { SkeletonDefault as Skeleton } from './skeletons/Default'
export { SliderDefault as Slider } from './sliders/Default'
export { SonnerDefault as Sonner } from './sonners/Default'
export { SwitchDefault as Switch } from './switches/Default'
export { TableDefault as Table } from './tables/Default'
// `Tabs` is the idiomatic name (matches shadcn). The DSL emits `TabDefault`
// because of the singularize rule on `library/tabs/default`; both names
// work at the import site.
export { TabDefault as Tabs } from './tabs/Default'
export { TextareaDefault as Textarea } from './textareas/Default'
export { ToastDefault as Toast } from './toasts/Default'
export { ToggleDefault as Toggle } from './toggles/Default'
export { ToggleGroupDefault as ToggleGroup } from './toggleGroups/Default'
export { TooltipDefault as Tooltip } from './tooltips/Default'
export { HeaderDefault as Header } from './headers/Default'
export { FooterDefault as Footer } from './footers/Default'