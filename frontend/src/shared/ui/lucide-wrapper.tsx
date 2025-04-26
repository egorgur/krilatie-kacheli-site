import { cva, type VariantProps } from "class-variance-authority";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import * as React from "react";

import {cn} from "../lib/tailwind"

const iconVariant = cva("", {
    defaultVariants: {
        color: "primary",
    },
    variants: {
        color: {

            muted: "text-gray-400",
            primary: "text-slate-800",
        },
    },
});

export type LucideIconProps = LucideProps & {
    icon: keyof typeof LucideIcons;
};

/** Принимаем стандартные настройки lucide + cva вариации для него */
export type LucideWrapperProps = Omit<LucideIconProps, "color"> &
    VariantProps<typeof iconVariant>;

/**
 * Враппер для компонетов lucide, служит аля конфигом для либы
 *
 * UsageExample: <LucideWrapper icon={"Clock10"} />
 */
export const LucideWrapper = ({
    className,
    color,
    icon,
    size,
    ...props
}: LucideWrapperProps) => {
    const Icon = LucideIcons[icon] as React.ComponentType<LucideProps>;
    const compileClassName = cn(iconVariant({ color, className }));

    return (
        <Icon
            className={compileClassName}
            size={size}
            strokeWidth={2}
            {...props}
        />
    );
};
