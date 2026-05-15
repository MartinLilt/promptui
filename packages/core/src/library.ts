export interface LibraryEntry {
  /** Canonical use path, e.g. "library/accordions/default" */
  use: string
  /** Main component import name, e.g. "AccordionDefault" */
  main: string
  /** Sub-part components importable alongside main, e.g. ["AccordionItem", "AccordionTrigger", "AccordionContent"] */
  parts: string[]
  /** npm package to import from */
  package: string
  /** Allowed values for the `variant:` directive. Omit if the component has no variant prop. */
  variants?: string[]
}

const PKG = '@getpromptui/ui'

export const LIBRARY_ENTRIES: LibraryEntry[] = [
  // Legacy components
  { use: 'library/heroes/primary', main: 'HeroPrimary', parts: [], package: PKG },
  {
    use: 'library/heroes/split',
    main: 'HeroSplit',
    parts: [
      'HeroSplitContent',
      'HeroSplitVisual',
      'HeroTitle',
      'HeroSubtitle',
      'HeroActions',
      'HeroEyebrow',
    ],
    package: PKG,
  },
  {
    use: 'library/heroes/centered',
    main: 'HeroCentered',
    parts: ['HeroTitle', 'HeroSubtitle', 'HeroActions', 'HeroEyebrow'],
    package: PKG,
  },
  {
    use: 'library/heroes/withVideo',
    main: 'HeroWithVideo',
    parts: [
      'HeroWithVideoBg',
      'HeroWithVideoOverlay',
      'HeroWithVideoContent',
      'HeroTitle',
      'HeroSubtitle',
      'HeroActions',
      'HeroEyebrow',
    ],
    package: PKG,
  },
  {
    use: 'library/heroes/withGradient',
    main: 'HeroWithGradient',
    parts: ['HeroTitle', 'HeroSubtitle', 'HeroActions', 'HeroEyebrow'],
    package: PKG,
  },
  { use: 'library/buttons/primary', main: 'ButtonPrimary', parts: [], package: PKG },
  { use: 'library/buttons/ghost', main: 'ButtonGhost', parts: [], package: PKG },
  { use: 'library/inputs/rounded', main: 'InputRounded', parts: [], package: PKG },
  { use: 'library/headings/gradientH2', main: 'GradientH2', parts: [], package: PKG },
  { use: 'library/results/text', main: 'ResultText', parts: [], package: PKG },

  // Shadcn-aligned primitives
  {
    use: 'library/accordions/default',
    main: 'AccordionDefault',
    parts: ['AccordionItem', 'AccordionTrigger', 'AccordionContent'],
    package: PKG,
    variants: ['default', 'bordered', 'separated'],
  },
  {
    use: 'library/alerts/default',
    main: 'AlertDefault',
    parts: ['AlertTitle', 'AlertDescription'],
    package: PKG,
    variants: ['default', 'destructive'],
  },
  {
    use: 'library/alertDialogs/default',
    main: 'AlertDialogDefault',
    parts: [
      'AlertDialogTrigger',
      'AlertDialogContent',
      'AlertDialogHeader',
      'AlertDialogFooter',
      'AlertDialogTitle',
      'AlertDialogDescription',
      'AlertDialogAction',
      'AlertDialogCancel',
    ],
    package: PKG,
  },
  { use: 'library/aspectRatios/default', main: 'AspectRatioDefault', parts: [], package: PKG },
  {
    use: 'library/avatars/default',
    main: 'AvatarDefault',
    parts: ['AvatarImage', 'AvatarFallback'],
    package: PKG,
  },
  {
    use: 'library/avatars/withStatus',
    main: 'AvatarWithStatus',
    parts: ['AvatarImage', 'AvatarFallback', 'AvatarStatusDot'],
    package: PKG,
  },
  {
    use: 'library/avatars/group',
    main: 'AvatarGroup',
    parts: ['AvatarDefault', 'AvatarImage', 'AvatarFallback', 'AvatarGroupOverflow'],
    package: PKG,
  },
  {
    use: 'library/badges/default',
    main: 'BadgeDefault',
    parts: [],
    package: PKG,
    variants: ['default', 'secondary', 'destructive', 'outline'],
  },
  {
    use: 'library/breadcrumbs/default',
    main: 'BreadcrumbDefault',
    parts: [
      'BreadcrumbList',
      'BreadcrumbItem',
      'BreadcrumbLink',
      'BreadcrumbPage',
      'BreadcrumbSeparator',
      'BreadcrumbEllipsis',
    ],
    package: PKG,
  },
  {
    use: 'library/breadcrumbs/withDropdown',
    main: 'BreadcrumbWithDropdown',
    parts: [
      'BreadcrumbList',
      'BreadcrumbItem',
      'BreadcrumbLink',
      'BreadcrumbPage',
      'BreadcrumbSeparator',
      'BreadcrumbDropdown',
      'BreadcrumbDropdownTrigger',
      'BreadcrumbDropdownContent',
    ],
    package: PKG,
  },
  {
    use: 'library/buttons/default',
    main: 'ButtonDefault',
    parts: [],
    package: PKG,
    variants: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
  },
  {
    use: 'library/buttons/icon',
    main: 'ButtonIcon',
    parts: [],
    package: PKG,
    variants: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
  },
  {
    use: 'library/buttons/loading',
    main: 'ButtonLoading',
    parts: [],
    package: PKG,
    variants: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
  },
  { use: 'library/calendars/default', main: 'CalendarDefault', parts: [], package: PKG },
  { use: 'library/calendars/range', main: 'CalendarRange', parts: [], package: PKG },
  { use: 'library/calendars/multiple', main: 'CalendarMultiple', parts: [], package: PKG },
  {
    use: 'library/cards/default',
    main: 'CardDefault',
    parts: ['CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    package: PKG,
  },
  {
    use: 'library/cards/stat',
    main: 'CardStat',
    parts: ['CardStatLabel', 'CardStatValue', 'CardStatTrend', 'CardStatDescription'],
    package: PKG,
  },
  {
    use: 'library/cards/profile',
    main: 'CardProfile',
    parts: [
      'CardProfileAvatar',
      'CardProfileName',
      'CardProfileRole',
      'CardProfileBio',
      'CardProfileActions',
    ],
    package: PKG,
  },
  {
    use: 'library/cards/media',
    main: 'CardMedia',
    parts: ['CardMediaImage', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    package: PKG,
  },
  {
    use: 'library/cards/pricing',
    main: 'CardPricing',
    parts: [
      'CardPricingHeader',
      'CardPricingName',
      'CardPricingPrice',
      'CardPricingFeatures',
      'CardPricingFeature',
      'CardPricingCta',
    ],
    package: PKG,
  },
  {
    use: 'library/cards/interactive',
    main: 'CardInteractive',
    parts: ['CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    package: PKG,
  },
  {
    use: 'library/carousels/default',
    main: 'CarouselDefault',
    parts: ['CarouselContent', 'CarouselItem', 'CarouselPrevious', 'CarouselNext'],
    package: PKG,
  },
  { use: 'library/charts/default', main: 'ChartDefault', parts: [], package: PKG },
  { use: 'library/charts/bar', main: 'ChartBar', parts: [], package: PKG },
  { use: 'library/charts/line', main: 'ChartLine', parts: [], package: PKG },
  { use: 'library/charts/area', main: 'ChartArea', parts: [], package: PKG },
  { use: 'library/charts/pie', main: 'ChartPie', parts: [], package: PKG },
  { use: 'library/charts/radar', main: 'ChartRadar', parts: [], package: PKG },
  { use: 'library/checkboxes/default', main: 'CheckboxDefault', parts: [], package: PKG },
  {
    use: 'library/collapsibles/default',
    main: 'CollapsibleDefault',
    parts: ['CollapsibleTrigger', 'CollapsibleContent'],
    package: PKG,
  },
  { use: 'library/comboboxes/default', main: 'ComboboxDefault', parts: [], package: PKG },
  { use: 'library/comboboxes/multi', main: 'ComboboxMulti', parts: [], package: PKG },
  {
    use: 'library/commands/default',
    main: 'CommandDefault',
    parts: [
      'CommandInput',
      'CommandList',
      'CommandEmpty',
      'CommandGroup',
      'CommandItem',
      'CommandSeparator',
    ],
    package: PKG,
  },
  {
    use: 'library/contextMenus/default',
    main: 'ContextMenuDefault',
    parts: [
      'ContextMenuTrigger',
      'ContextMenuContent',
      'ContextMenuItem',
      'ContextMenuSeparator',
      'ContextMenuLabel',
      'ContextMenuGroup',
    ],
    package: PKG,
  },
  { use: 'library/dataTables/default', main: 'DataTableDefault', parts: [], package: PKG },
  { use: 'library/datePickers/default', main: 'DatePickerDefault', parts: [], package: PKG },
  { use: 'library/datePickers/range', main: 'DatePickerRange', parts: [], package: PKG },
  { use: 'library/datePickers/multiple', main: 'DatePickerMultiple', parts: [], package: PKG },
  {
    use: 'library/dialogs/default',
    main: 'DialogDefault',
    parts: [
      'DialogTrigger',
      'DialogContent',
      'DialogHeader',
      'DialogFooter',
      'DialogTitle',
      'DialogDescription',
      'DialogClose',
    ],
    package: PKG,
    variants: ['default', 'fullscreen', 'compact'],
  },
  {
    use: 'library/drawers/default',
    main: 'DrawerDefault',
    parts: [
      'DrawerTrigger',
      'DrawerContent',
      'DrawerHeader',
      'DrawerFooter',
      'DrawerTitle',
      'DrawerDescription',
      'DrawerClose',
    ],
    package: PKG,
  },
  {
    use: 'library/dropdownMenus/default',
    main: 'DropdownMenuDefault',
    parts: [
      'DropdownMenuTrigger',
      'DropdownMenuContent',
      'DropdownMenuItem',
      'DropdownMenuLabel',
      'DropdownMenuSeparator',
      'DropdownMenuGroup',
      'DropdownMenuCheckboxItem',
    ],
    package: PKG,
  },
  {
    use: 'library/forms/default',
    main: 'FormDefault',
    parts: ['FormItem', 'FormLabel', 'FormControl', 'FormDescription', 'FormMessage'],
    package: PKG,
  },
  {
    use: 'library/hoverCards/default',
    main: 'HoverCardDefault',
    parts: ['HoverCardTrigger', 'HoverCardContent'],
    package: PKG,
  },
  { use: 'library/inputs/default', main: 'InputDefault', parts: [], package: PKG },
  { use: 'library/inputs/email', main: 'InputEmail', parts: [], package: PKG },
  { use: 'library/inputs/password', main: 'InputPassword', parts: [], package: PKG },
  { use: 'library/inputs/search', main: 'InputSearch', parts: [], package: PKG },
  { use: 'library/inputs/number', main: 'InputNumber', parts: [], package: PKG },
  { use: 'library/inputs/file', main: 'InputFile', parts: [], package: PKG },
  { use: 'library/inputs/date', main: 'InputDate', parts: [], package: PKG },
  { use: 'library/inputs/withIcon', main: 'InputWithIcon', parts: [], package: PKG },
  { use: 'library/inputs/withPrefix', main: 'InputWithPrefix', parts: [], package: PKG },
  { use: 'library/inputs/withSuffix', main: 'InputWithSuffix', parts: [], package: PKG },
  {
    use: 'library/inputOtps/default',
    main: 'InputOtpDefault',
    parts: ['InputOtpGroup', 'InputOtpSlot', 'InputOtpSeparator'],
    package: PKG,
  },
  { use: 'library/labels/default', main: 'LabelDefault', parts: [], package: PKG },
  {
    use: 'library/menubars/default',
    main: 'MenubarDefault',
    parts: ['MenubarMenu', 'MenubarTrigger', 'MenubarContent', 'MenubarItem', 'MenubarSeparator'],
    package: PKG,
  },
  {
    use: 'library/navigationMenus/default',
    main: 'NavigationMenuDefault',
    parts: [
      'NavigationMenuList',
      'NavigationMenuItem',
      'NavigationMenuTrigger',
      'NavigationMenuContent',
      'NavigationMenuLink',
    ],
    package: PKG,
  },
  {
    use: 'library/navigationMenus/mobile',
    main: 'NavigationMenuMobile',
    parts: [
      'NavigationMenuMobileTrigger',
      'NavigationMenuMobileDrawer',
      'NavigationMenuMobileClose',
      'NavigationMenuList',
      'NavigationMenuItem',
      'NavigationMenuLink',
    ],
    package: PKG,
  },
  {
    use: 'library/navigationMenus/mega',
    main: 'NavigationMenuMega',
    parts: [
      'NavigationMenuMegaContent',
      'NavigationMenuMegaColumns',
      'NavigationMenuMegaColumn',
      'NavigationMenuMegaGroup',
      'NavigationMenuMegaGroupTitle',
      'NavigationMenuList',
      'NavigationMenuItem',
      'NavigationMenuTrigger',
      'NavigationMenuLink',
    ],
    package: PKG,
  },
  {
    use: 'library/paginations/default',
    main: 'PaginationDefault',
    parts: [
      'PaginationContent',
      'PaginationItem',
      'PaginationLink',
      'PaginationPrevious',
      'PaginationNext',
      'PaginationEllipsis',
    ],
    package: PKG,
    variants: ['default', 'compact'],
  },
  {
    use: 'library/paginations/withPageSize',
    main: 'PaginationWithPageSize',
    parts: [
      'PaginationContent',
      'PaginationItem',
      'PaginationLink',
      'PaginationPrevious',
      'PaginationNext',
      'PaginationEllipsis',
      'PaginationPageSize',
      'PaginationPageSizeLabel',
      'PaginationPageSizeSelect',
    ],
    package: PKG,
  },
  {
    use: 'library/popovers/default',
    main: 'PopoverDefault',
    parts: ['PopoverTrigger', 'PopoverContent'],
    package: PKG,
  },
  { use: 'library/progresses/default', main: 'ProgressDefault', parts: [], package: PKG },
  { use: 'library/progresses/circular', main: 'ProgressCircular', parts: [], package: PKG },
  { use: 'library/progresses/stepped', main: 'ProgressStepped', parts: [], package: PKG },
  {
    use: 'library/radioGroups/default',
    main: 'RadioGroupDefault',
    parts: ['RadioGroupItem'],
    package: PKG,
  },
  {
    use: 'library/resizables/default',
    main: 'ResizableDefault',
    parts: ['ResizablePanel', 'ResizableHandle'],
    package: PKG,
  },
  {
    use: 'library/scrollAreas/default',
    main: 'ScrollAreaDefault',
    parts: ['ScrollAreaViewport', 'ScrollBar'],
    package: PKG,
  },
  {
    use: 'library/selects/default',
    main: 'SelectDefault',
    parts: [
      'SelectTrigger',
      'SelectValue',
      'SelectContent',
      'SelectItem',
      'SelectGroup',
      'SelectLabel',
      'SelectSeparator',
    ],
    package: PKG,
  },
  {
    use: 'library/separators/default',
    main: 'SeparatorDefault',
    parts: [],
    package: PKG,
    variants: ['default', 'dashed', 'dotted'],
  },
  { use: 'library/separators/withLabel', main: 'SeparatorWithLabel', parts: [], package: PKG },
  {
    use: 'library/sheets/default',
    main: 'SheetDefault',
    parts: [
      'SheetTrigger',
      'SheetContent',
      'SheetHeader',
      'SheetFooter',
      'SheetTitle',
      'SheetDescription',
      'SheetClose',
    ],
    package: PKG,
  },
  {
    use: 'library/sidebars/default',
    main: 'SidebarDefault',
    parts: [
      'SidebarHeader',
      'SidebarContent',
      'SidebarFooter',
      'SidebarGroup',
      'SidebarGroupLabel',
      'SidebarMenu',
      'SidebarMenuItem',
      'SidebarMenuButton',
      'SidebarTrigger',
    ],
    package: PKG,
  },
  { use: 'library/skeletons/default', main: 'SkeletonDefault', parts: [], package: PKG },
  { use: 'library/skeletons/text', main: 'SkeletonText', parts: [], package: PKG },
  { use: 'library/skeletons/circle', main: 'SkeletonCircle', parts: [], package: PKG },
  { use: 'library/skeletons/card', main: 'SkeletonCard', parts: [], package: PKG },
  { use: 'library/sliders/default', main: 'SliderDefault', parts: [], package: PKG },
  { use: 'library/sliders/range', main: 'SliderRange', parts: [], package: PKG },
  { use: 'library/sonners/default', main: 'SonnerDefault', parts: [], package: PKG },
  { use: 'library/switches/default', main: 'SwitchDefault', parts: [], package: PKG },
  {
    use: 'library/tables/default',
    main: 'TableDefault',
    parts: [
      'TableHeader',
      'TableBody',
      'TableFooter',
      'TableRow',
      'TableHead',
      'TableCell',
      'TableCaption',
    ],
    package: PKG,
  },
  {
    use: 'library/tabs/default',
    main: 'TabDefault',
    parts: ['TabList', 'TabTrigger', 'TabContent'],
    package: PKG,
    variants: ['default', 'pills', 'boxed'],
  },
  {
    use: 'library/tabs/vertical',
    main: 'TabVertical',
    parts: ['TabVerticalList', 'TabVerticalPanels', 'TabTrigger', 'TabContent'],
    package: PKG,
  },
  { use: 'library/textareas/default', main: 'TextareaDefault', parts: [], package: PKG },
  {
    use: 'library/toasts/default',
    main: 'ToastDefault',
    parts: [
      'ToastAction',
      'ToastClose',
      'ToastTitle',
      'ToastDescription',
      'ToastViewport',
    ],
    package: PKG,
    variants: ['default', 'destructive'],
  },
  { use: 'library/toggles/default', main: 'ToggleDefault', parts: [], package: PKG },
  {
    use: 'library/toggleGroups/default',
    main: 'ToggleGroupDefault',
    parts: ['ToggleGroupItem'],
    package: PKG,
  },
  {
    use: 'library/tooltips/default',
    main: 'TooltipDefault',
    parts: ['TooltipTrigger', 'TooltipContent', 'TooltipProvider'],
    package: PKG,
  },
  {
    use: 'library/tooltips/rich',
    main: 'TooltipRich',
    parts: [
      'TooltipRichTrigger',
      'TooltipRichContent',
      'TooltipRichTitle',
      'TooltipRichDescription',
      'TooltipRichActions',
    ],
    package: PKG,
  },

  // Site chrome (v0.5)
  {
    use: 'library/headers/default',
    main: 'HeaderDefault',
    parts: ['HeaderBrand', 'HeaderNav', 'HeaderActions'],
    package: PKG,
    variants: ['default', 'minimal', 'full', 'sticky'],
  },
  {
    use: 'library/footers/default',
    main: 'FooterDefault',
    parts: [
      'FooterColumns',
      'FooterColumn',
      'FooterColumnTitle',
      'FooterLinks',
      'FooterLink',
      'FooterBottom',
      'FooterCopyright',
      'FooterLegalLinks',
      'FooterSocial',
    ],
    package: PKG,
    variants: ['default', 'minimal', 'columns', 'newsletter'],
  },

  // Semantic layout primitives (v0.5)
  { use: 'library/layouts/header', main: 'LayoutHeader', parts: [], package: PKG },
  { use: 'library/layouts/footer', main: 'LayoutFooter', parts: [], package: PKG },
  { use: 'library/layouts/main', main: 'LayoutMain', parts: [], package: PKG },
  { use: 'library/layouts/nav', main: 'LayoutNav', parts: [], package: PKG },
  { use: 'library/layouts/section', main: 'LayoutSection', parts: [], package: PKG },
  { use: 'library/layouts/article', main: 'LayoutArticle', parts: [], package: PKG },

  { use: 'library/headings/default', main: 'HeadingDefault', parts: [], package: PKG },

  { use: 'library/grids/default', main: 'GridDefault', parts: [], package: PKG },
]

const BY_USE = new Map<string, LibraryEntry>(LIBRARY_ENTRIES.map(e => [e.use, e]))

const BY_PART = (() => {
  const m = new Map<string, LibraryEntry>()
  for (const e of LIBRARY_ENTRIES) {
    for (const p of e.parts) m.set(p, e)
  }
  return m
})()

export function lookupByUse(use: string): LibraryEntry | undefined {
  return BY_USE.get(use)
}

export function lookupByPart(componentName: string): LibraryEntry | undefined {
  return BY_PART.get(componentName)
}

export function isKnownComponent(componentName: string): boolean {
  for (const e of LIBRARY_ENTRIES) {
    if (e.main === componentName) return true
    if (e.parts.includes(componentName)) return true
  }
  return false
}

/** Get package for a component name (main or part). Returns undefined if unknown. */
export function packageForComponent(componentName: string): string | undefined {
  for (const e of LIBRARY_ENTRIES) {
    if (e.main === componentName || e.parts.includes(componentName)) return e.package
  }
  return undefined
}