<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitda58393e0bf0f82ed204c3a6e5a1f76e
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInitda58393e0bf0f82ed204c3a6e5a1f76e::$classMap;

        }, null, ClassLoader::class);
    }
}
