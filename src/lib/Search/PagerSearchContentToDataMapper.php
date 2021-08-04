<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace Ibexa\AdminUi\Search;

use function class_alias;

class_alias(
    \Ibexa\Platform\Search\Mapper\PagerSearchContentToDataMapper::class,
    __NAMESPACE__ . '\PagerSearchContentToDataMapper'
);

if (false) {
    /**
     * @deprecated since 3.1, to be removed in 3.2.
     * Use \Ibexa\Platform\Search\Mapper\PagerSearchContentToDataMapper instead
     */
    class PagerSearchContentToDataMapper extends \Ibexa\Platform\Search\Mapper\PagerSearchContentToDataMapper
    {
    }
}

class_alias(PagerSearchContentToDataMapper::class, 'EzSystems\EzPlatformAdminUi\Search\PagerSearchContentToDataMapper');
