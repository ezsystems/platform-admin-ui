<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace EzSystems\EzPlatformAdminUi\UI\Config\Provider\FieldType\RichText;

use EzSystems\EzPlatformAdminUi\UI\Config\ProviderInterface;

class AlloyEditor implements ProviderInterface
{
    /** @var array */
    private $alloyEditorConfiguration;

    /**
     * @param array $alloyEditorConfiguration
     */
    public function __construct(array $alloyEditorConfiguration)
    {
        $this->alloyEditorConfiguration = $alloyEditorConfiguration;
    }

    /**
     * @return array AlloyEditor config
     */
    public function getConfig(): array
    {
        return [
            'extraPlugins' => $this->getExtraPlugins(),
            'extraButtons' => $this->getExtraButtons(),
        ];
    }

    /**
     * @return array Custom plugins
     */
    protected function getExtraPlugins(): array
    {
        if (isset($this->alloyEditorConfiguration['extra_plugins'])) {
            return $this->alloyEditorConfiguration['extra_plugins'];
        }

        return [];
    }

    /**
     * This will be deprecated in eZ Platform 3.x.
     * The alternative and more flexible solution will be introduced.
     * So you will need to update Online Editor Extra Buttons as part of eZ Platform 3.x upgrade.
     *
     * @return array Custom plugins
     */
    protected function getExtraButtons(): array
    {
        if (isset($this->alloyEditorConfiguration['extra_buttons'])) {
            return $this->alloyEditorConfiguration['extra_buttons'];
        }

        return [];
    }
}
